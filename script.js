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
  const items = [];

  data.forEach((item, index) => {
    const borderWrapper = document.createElement("div");
    borderWrapper.classList.add("border-wrapper");

    const whiteBg = document.createElement("div");
    whiteBg.classList.add("white-bg");

    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.innerHTML = `<h3>${item.title}</h3><span class="arrow"><img src="/images/icons/arrowRightIcon.png" alt="Right Arrow"></span>`;

    const body = document.createElement("div");
    body.classList.add("accordion-body");
    body.textContent = item.description;

    accordionItem.appendChild(header);
    accordionItem.appendChild(body);
    whiteBg.appendChild(accordionItem);
    borderWrapper.appendChild(whiteBg);

    // Store everything, including index
    items.push({ index, borderWrapper, whiteBg, accordionItem });

    // Initial render
    if (index === active) {
      accordionItem.classList.add("active");
      containerId.appendChild(borderWrapper);
    } else {
      containerId.appendChild(accordionItem);
    }

    // Add click logic
    header.addEventListener("click", () => {
      items.forEach((entry) => {
        entry.accordionItem.classList.remove("active");

        // Remove border wrapper if present
        if (containerId.contains(entry.borderWrapper)) {
          containerId.removeChild(entry.borderWrapper);
        }

        // Re-insert plain accordionItem in correct order
        const refNode = containerId.children[entry.index];
        if (!containerId.contains(entry.accordionItem)) {
          containerId.insertBefore(entry.accordionItem, refNode || null);
        }
      });

      // Activate and wrap current
      accordionItem.classList.add("active");

      if (accordionItem.parentNode !== whiteBg) {
        whiteBg.appendChild(accordionItem);
      }

      // Insert borderWrapper in original position
      const refNode = containerId.children[index];
      containerId.insertBefore(borderWrapper, refNode || null);
    });
  });
};



AccordionMaker(accordionData, accordionContainer, 0);

AccordionMaker(faqData, faqContainer, 2);



const messagesData = [
  {
    sender: 'user',
    text: "Hi! Can I book an appointment for next week?",
    timestamp: "11:00 am",
    image: "/images/male.png"
  },
  {
    sender: 'bot',
    text: "Absolutely👋 Our next available slot is next Tuesday at 2 pm. Would that work?",
    timestamp: "11:01 am",
    image: "/images/female.png"
  },
  {
    sender: "user",
    text: "Awesome, let's do it.",
    timestamp: "11:04 am",
    image: "/images/male.png"
  },
  {
    sender: "bot",
    text: "All set! I've sent a confirmation email – can't wait to see you! ✨",
    timestamp: "11:05 am",
    image: "/images/female.png"
  },
  {
    sender: "user",
    text: "Awesome.",
    timestamp: "11:06 am",
    image: "/images/male.png"
  },
  {
    sender: "bot",
    text: "can't wait to see you! ✨",
    timestamp: "11:06 am",
    image: "/images/female.png"
  }
];

// Target the container
const chatContainer = document.querySelector('.demo-chatbox');

// Function to create and insert messages
function renderMessages(messages) {
  chatContainer.innerHTML = ""; 
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', msg.sender);

    messageDiv.innerHTML = `
      <img src="${msg.image}" class="user-img" alt="User" />
        <div class="bubble">${msg.text}</div>
        <span class="timestamp">${msg.timestamp} &nbsp; <img src="/images/icons/dtIcon.png" alt="" /></span>
    `;

    chatContainer.appendChild(messageDiv);
  });
}


window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".chat-loader-overlay");

  // Simulate loading delay (e.g., fetching messages)
  setTimeout(() => {
    if (loader) loader.remove();

   renderMessages(messagesData); 
  }, 1000); // 1 second delay
});

