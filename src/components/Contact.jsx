"use client"

import  { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Loader2 } from "lucide-react"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: "" })

    try {
      // Initialize EmailJS with your public key
      // You need to create an account at https://www.emailjs.com/ and get these credentials
      const serviceID = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
      const templateID = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key

      // Send the email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'dangolraman843@gmail.com',
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey
      )

      if (response.status === 200) {
        setSubmitStatus({ 
          success: true, 
          message: "Thank you for your message! I'll get back to you soon." 
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      console.error("Failed to send message:", error)
      setSubmitStatus({ 
        success: false, 
        message: "Sorry, there was an error sending your message. Please try again later or contact me directly at dangolraman843@gmail.com." 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dangolraman843@gmail.com",
      href: "mailto:dangolraman843@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9763774451",
      href: "tel:+9779763774451",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/raman1224",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ramandangol",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageCircle,
      label: "Portfolio",
      href: "https://raman1224.github.io/ramandangol",
      color: "hover:text-green-600",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Let`s discuss your next project or just say hello. I`m always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-primary">Let`s Connect</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-muted rounded-lg hover:scale-110 transition-all duration-200 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-2 text-primary">Availability Status</h4>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Currently open to freelance work and full-time opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact