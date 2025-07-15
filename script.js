document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeBtn = document.querySelector(".close-btn");

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });

  // Optional: Close menu when clicking on a nav link
  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});


/* Feature Accordion */
const accordionData = [
  {
    title: "Custom AI solution development",
    description: "We offer custom human like solutions that can be custom tailored to your company"
  },
  {
    title: "Knowledge Bases",
    description: "Centralize company knowledge, FAQs, and training materials for instant access by your AI assistant."
  },
  {
    title: "Contact management",
    description: "Easily manage your customer contacts, segment them by behavior, and personalize communication."
  },
  {
    title: "Campaign management",
    description: "Design and automate campaigns to engage users via WhatsApp, email, or chat with intelligent workflows."
  },
  {
    title: "Live Chat",
    description: "Allow human agents or AI to communicate with customers in real-time across platforms like WhatsApp and web."
  },
  {
    title: "Reporting and analytics",
    description: "Track key metrics like engagement, leads, conversions, and agent performance with real-time insights."
  }
];

const accordionContainer = document.getElementById("accordion");

/* Faq Accordion */
const faqData = [
  {
    title: "What is Sophia and how does it work?",
    description: "Sophia is an AI-powered virtual assistant designed to automate customer interactions across various platforms. It works by using advanced natural language processing to understand and respond to customer queries in real-time."
  },
  {
    title: "Do I need coding knowledge to set up Sophia?",
    description: "No, you don’t need any coding knowledge. Sophia offers a user-friendly interface that allows you to configure, customize, and launch your assistant with simple steps."
  },
  {
    title: "Can Sophia handle multiple customers at once?",
    description: "Yes, Sophia handles multiple customers and ensures no message goes unanswered even during busy hours."
  },
  {
    title: "Can I customize the AI responses?",
    description: "Absolutely! You can tailor Sophia’s responses to match your brand tone and provide specific answers to frequently asked questions using its intuitive customization panel."
  },
  {
    title: "Is Sophia only for customer support?",
    description: "No, Sophia can be used for sales, lead generation, onboarding, feedback collection, and more—making it a versatile solution beyond just support."
  },
  {
    title: "What analytics does Sophia provide?",
    description: "Sophia provides detailed analytics on user engagement, response times, satisfaction rates, common queries, and conversation history to help you improve your customer experience."
  }
];


const faqContainer = document.getElementById("faqAccordion");

const AccordionMaker = (data, containerId, active) => {
  data.forEach((item, index) => {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");
  if (index === active) accordionItem.classList.add("active");

  const header = document.createElement("div");
  header.classList.add("accordion-header");
  header.innerHTML = `<h3>${item.title}</h3><span class="arrow"><img src="/images/icons/arrowRightIcon.png" alt="Right Arrow"></span>`;
  accordionItem.appendChild(header);

  const body = document.createElement("div");
  body.classList.add("accordion-body");
  body.textContent = item.description;
  accordionItem.appendChild(body);

  header.addEventListener("click", () => {
    document.querySelectorAll(".accordion-item").forEach(el => el.classList.remove("active"));
    accordionItem.classList.add("active");
  });

  containerId.appendChild(accordionItem);
});
}

AccordionMaker(accordionData, accordionContainer, 0);

AccordionMaker(faqData, faqContainer, 2);

