import React from 'react';

function ContactIcons() {
  const contactLinks = [
    {
      "name": "email",
      "url": "mailto:zakstamps@gmail.com",
      "classes": "far fa-envelope"
    },
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/zak-stamps-3738a44a/",
      "classes": "fab fa-linkedin"
    },
    {
      "name": "github",
      "url": "https://github.com/theoneandonlyzako",
      "classes": "fab fa-github"
    },
    {
      "name": "Discord",
      "url": "https://discord.gg/8Ke2z6FW",
      "classes": "fab fa-discord"
    },
  ]

  return (
    <div className="mt-2 mt-lg-0">
      {contactLinks.map((contactLink) => {
        return (
          <a href={contactLink.url}
            key={contactLink.name}
            target="_blank"
            rel="noopener noreferrer"
            className="m-3">
            <span><i className={contactLink.classes}></i></span>
          </a>
        )
      })}
    </div>
  )
}

export default ContactIcons;