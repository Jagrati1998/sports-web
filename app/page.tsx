import Image from "next/image";
import CardSection from './cardGrid'
import Carousel from './carousel'
import  SocialMediaSection from './SocialMedia' 

import BackgroundImageSection from './DownBackGround';
export default function Home() {
  const imageUrls = [
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
  ];
 let socialLinks = [
    {
      name: 'Facebook', // Social media platform name
      url: 'https://www.facebook.com/your-page', // Link URL
      iconClass: 'fab fa-facebook-f', // Tailwind CSS icon class
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-handle',
      iconClass: 'fab fa-twitter',
    },
    // ... add more social links ...
  ];
  var imageSrc="your-image.jpg"
  var headline="Your Website Headline"
  var content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod magna at lacinia congue..."
  var ctaText="Join online"
  return (
    <>
    <div className="sticky top-0 z-10  bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 via-red-800 to-black text-white py-8 px-8 flex justify-between">
        <h1>Your Website Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </header>
      </div>
      <div className="h-screen bg-gray-900">

      {/* Main Content */}
      <main className="flex flex-col h-full">
        <img src='https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym94aW5nfGVufDB8fDB8fHww' alt="Image Description" className="w-full h-full object-cover absolute  left-0 z-0" />

        <div className="content-overlay relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-8">
            <h1 className="text-4xl font-bold mb-4">{headline}</h1>
            <p className="text-xl mb-8">{content}</p>
            <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">{ctaText}</button>
          </div>
        </div>
      </main>
     
<div className="bg-black justify-center">
 <CardSection />
 <CardSection />
 </div>
 <BackgroundImageSection />
  <div className="bg-black justify-center">
<Carousel  />
<SocialMediaSection />
</div> 
     
   
      {/* Footer */}
      <footer className="bg-gray-600 text-white text-center py-4">
        <p>&copy; 2024 Your Website Name</p>
      </footer>
    </div>
    </>
  );
}
