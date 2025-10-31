"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Calendar, Chef, Crown, Gift, HelpCircle, Heart, Home, Leaf, MessageCircle, Star, UtensilsCrossed, Utensils, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Team", id: "team" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Mecho"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Flavors, Memorable Moments"
          description="Experience culinary excellence at Mecho, where traditional recipes meet modern presentation in an atmosphere of warmth and sophistication."
          tag="Fine Dining"
          tagIcon={Utensils}
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "View Menu", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant Mecho restaurant interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Founded with a passion for exceptional cuisine and warm hospitality, Mecho brings together the finest ingredients and time-honored cooking techniques."
          tag="Since 2018"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Fresh Ingredients",
              description: "Sourced daily from local farms and trusted suppliers",
              icon: Leaf
            },
            {
              title: "Master Chefs",
              description: "Trained in classical techniques with creative flair",
              icon: Chef
            },
            {
              title: "Warm Atmosphere",
              description: "Designed for intimate dining and special celebrations",
              icon: Home
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7552321/pexels-photo-7552321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Chef preparing dishes in kitchen"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="What Makes Us Special"
          description="Discover the elements that create an unforgettable dining experience at Mecho"
          tag="Experience"
          tagIcon={Star}
          features={[
            {
              title: "Curated Menu",
              description: "Seasonal dishes crafted with precision and artistic presentation",
              imageSrc: "https://images.pexels.com/photos/4694319/pexels-photo-4694319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautifully plated dish"
            },
            {
              title: "Premium Ingredients",
              description: "Only the finest locally-sourced and organic ingredients",
              imageSrc: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh organic ingredients"
            },
            {
              title: "Intimate Setting",
              description: "Perfect ambiance for romantic dinners and special occasions",
              imageSrc: "https://images.pexels.com/photos/34453548/pexels-photo-34453548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cozy restaurant dining room"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Menu"
          description="Carefully crafted dishes that showcase the best of seasonal ingredients and culinary artistry"
          tag="Signature Dishes"
          tagIcon={UtensilsCrossed}
          products={[
            {
              id: "1",
              brand: "Appetizers",
              name: "Truffle Mushroom Risotto",
              price: "$18",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Truffle mushroom risotto"
            },
            {
              id: "2",
              brand: "Main Course",
              name: "Herb Crusted Salmon",
              price: "$32",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/10296258/pexels-photo-10296258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Herb crusted salmon"
            },
            {
              id: "3",
              brand: "Desserts",
              name: "Chocolate Soufflé",
              price: "$14",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/33033816/pexels-photo-33033816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chocolate soufflé"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Dining Experiences"
          description="Choose the perfect dining experience for your occasion"
          tag="Packages"
          tagIcon={Gift}
          plans={[
            {
              id: "1",
              badge: "Popular",
              badgeIcon: Star,
              price: "$65",
              subtitle: "Perfect for date nights",
              features: [
                "3-course dinner",
                "Wine pairing",
                "Complimentary bread",
                "Personalized service"
              ]
            },
            {
              id: "2",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$95",
              subtitle: "Ideal for celebrations",
              features: [
                "5-course tasting menu",
                "Premium wine selection",
                "Chef's special appetizer",
                "Private dining area",
                "Dessert presentation"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The passionate professionals who make every dining experience exceptional"
          tag="Our People"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Chef Marco",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Marco portrait"
            },
            {
              id: "2",
              name: "Sarah Collins",
              role: "Restaurant Manager",
              imageSrc: "https://images.pexels.com/photos/4428046/pexels-photo-4428046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Collins portrait"
            },
            {
              id: "3",
              name: "Antoine Dubois",
              role: "Sommelier",
              imageSrc: "https://images.pexels.com/photos/8775458/pexels-photo-8775458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Antoine Dubois portrait"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real experiences from our valued customers who have dined with us"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Emily Rodriguez",
              role: "Food Blogger",
              company: "Culinary Adventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9826293/pexels-photo-9826293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Sophie Laurent",
              role: "Event Planner",
              company: "Elegant Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6718716/pexels-photo-6718716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sophie Laurent portrait"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Wine Enthusiast",
              company: "Vintner's Circle",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9199102/pexels-photo-9199102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Thompson portrait"
            },
            {
              id: "5",
              name: "Lisa & James",
              role: "Anniversary Celebration",
              company: "Special Occasion",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5086615/pexels-photo-5086615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa and James portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about dining at Mecho"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Do I need a reservation?",
              content: "Yes, we highly recommend reservations, especially for dinner service and weekends. You can book online or call us directly."
            },
            {
              id: "2",
              title: "What is your dress code?",
              content: "We maintain a smart casual dress code. While jackets are not required, we ask that guests dress appropriately for fine dining."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! Our chefs can accommodate most dietary restrictions including vegetarian, vegan, and gluten-free options. Please inform us when making your reservation."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer complimentary valet parking for all guests. Street parking is also available nearby."
            }
          ]}
          imageSrc="https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Mecho restaurant exterior"
          mediaPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          tagIcon={Calendar}
          title="Ready to Dine with Us?"
          description="Reserve your table today and experience the exceptional cuisine and warm hospitality that Mecho is known for."
          inputPlaceholder="Your email address"
          buttonText="Reserve Table"
          termsText="By submitting, you agree to receive reservation confirmations and special offers from Mecho."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "product" },
                { label: "Meet the Team", href: "team" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "contact" },
                { label: "Catering", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Call Us", href: "tel:+1234567890" }
              ]
            }
          ]}
          copyrightText="© 2025 Mecho Restaurant. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}