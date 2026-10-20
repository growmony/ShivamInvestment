// Before publishing, replace this placeholder with your email address.
const CONTACT_EMAIL = "growmony@gmail.com";

document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
const menu = document.querySelector(".menu"), links = document.querySelector(".links");
if(menu && links) menu.addEventListener("click", () => links.classList.toggle("open"));
const observer = ("IntersectionObserver" in window) ? new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}), {threshold:.12}) : null;
document.querySelectorAll(".reveal").forEach(el => observer ? observer.observe(el) : el.classList.add("visible"));
const money = n => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(Math.max(0,n));
document.querySelectorAll(".calc-form").forEach(form => {
  const calculate = ev => {
    if(ev) ev.preventDefault();
    const amount = Math.max(0, Number(form.elements.amount.value));
    const rate = Math.max(0, Number(form.elements.rate.value))/100;
    const years = Math.max(1, Number(form.elements.years.value));
    let invested=0, value=0;
    if(form.dataset.calc === "lumpsum"){
      invested=amount; value=amount*Math.pow(1+rate,years);
    } else if(form.dataset.calc === "sip"){
      const months=years*12, r=Math.pow(1+rate,1/12)-1;
      invested=amount*months;
      value = r===0 ? invested : amount*((Math.pow(1+r,months)-1)/r)*(1+r);
    } else {
      const step=Math.max(0,Number(form.elements.step.value))/100;
      const r=Math.pow(1+rate,1/12)-1;
      for(let y=0;y<years;y++){
        const monthly=amount*Math.pow(1+step,y);
        for(let m=0;m<12;m++){ invested+=monthly; value=value*(1+r)+monthly; }
      }
    }
    form.parentElement.querySelector('[data-out="invested"]').textContent=money(invested);
    form.parentElement.querySelector('[data-out="returns"]').textContent=money(Math.max(0,value-invested));
    form.parentElement.querySelector('[data-out="value"]').textContent=money(value);
  };
  form.addEventListener("submit",calculate); calculate();
});
document.querySelectorAll(".email-form").forEach(form => form.addEventListener("submit", async ev => {
  ev.preventDefault();
  const status=form.querySelector(".form-status");
  if(CONTACT_EMAIL==="YOUR_EMAIL_HERE" || !CONTACT_EMAIL.includes("@")){
    status.textContent="Setup required: replace YOUR_EMAIL_HERE in script.js and follow README.md to connect FormSubmit.";
    status.style.color="#b45309"; return;
  }
  status.textContent="Sending…"; status.style.color="";
  const data=new FormData(form);
  data.append("_subject", form.dataset.form==="feedback" ? "New Shivam Investment website feedback" : "New Shivam Investment contact inquiry");
  data.append("_captcha","true");
  data.append("_template","table");
  try{
    const response=await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,{method:"POST",headers:{"Accept":"application/json"},body:data});
    const result=await response.json();
    if(response.ok && result.success){status.textContent="Thank you! Your message has been sent. / धन्यवाद! आपका संदेश भेज दिया गया है।";form.reset();}
    else {status.textContent="Could not send right now. Please try again later or use the Contact Us form.";status.style.color="#b45309";}
  }catch(e){status.textContent="Network issue. Please try again later or use the Contact Us form.";status.style.color="#b45309";}
}));