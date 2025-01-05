import React, { useState, useEffect } from "react";

const SliderWithServices = () => {
  // Slider images
  const sliderImages = [
    "src/assets/slider13.png",
    "src/assets/slider2.webp",
    "src/assets/slider3.webp",
    "src/assets/slider4.webp",
  ];

  const services = [
    { title: "Sell Phone", image: "src/assets/sellphone.webp" },
    { title: "Buy Phone", image: "src/assets/buyphone.webp" },
    { title: "Buy Laptops", image: "src/assets/buylaptops.webp" },
    { title: "Repair Phone", image: "src/assets/repairphone.webp" },
    { title: "Repair Laptop", image: "src/assets/repairlaptop.webp" },
    { title: "Find New Phone", image: "src/assets/findnewphone.webp" },
    { title: "Nearby Stores", image: "src/assets/nearbystores.webp" },
    { title: "Buy Smartwatches", image: "src/assets/buysmartwatches.webp" },
    { title: "Recycle", image: "src/assets/recycle.webp" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="mt-32">
      {/* Slider Section */}
      <div className="relative w-full h-90">
        {/* Slides */}
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0.5 transform -translate-y-1/2 bg-white text-gray p-2 rounded-md hover:bg-gray-200"
          onClick={goToPrevSlide}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-0.5 transform -translate-y-1/2 bg-white text-gray p-2 rounded-md hover:bg-gray-200"
          onClick={goToNextSlide}
        >
          &#8594;
        </button>
      </div>

      {/* Our Services Section */}
      <div className="py-14">
        <h2 className="text-left text-2.5xl mb-4 text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-none rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover"
              />
              <div className="py-2 text-center">
                <p className="text-sm font-medium text-gray-700">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-2">
        <h2 className="text-left text-2.5xl  mb-4 text-gray-900">
          Sell Your Old Device Now
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-none rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover"
              />
              <div className="py-2 text-center">
                <p className="text-sm font-medium text-gray-700">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

<div>
    <pre>
    Buy Old Mobile Phones & Sell Your Old Phone with Cashify
Looking to buy old phone or sell your old mobile phone? Cashify has you covered! At Cashify, we provide a seamless experience whether you're buying or selling old mobile phones.  Introducing Cashify, India's biggest re-commerce website.


With Cashify's smooth user experience, you can buy old phones online with just a few clicks. Buying old mobile phone is the best way to upgrade without causing a hole in the pocket. Cashify keeps old mobile phones in great condition so that they feel as good as new ones when you purchase them.


Buy Old Mobile Phones
Cashify offers a smart and economical way to buy old phones. Explore our vast selection of refurbished smartphones at prices that won’t break the bank. Our phones are inspected and restored by professionals to ensure they feel as good as new. On top of that, you get:


- High-quality refurbished phones at affordable prices

- 32-point quality checks 

- 6-month warranty on all refurbished phones

- 15 days replacement


Upgrade your phone without stretching your budget. Discover our wide range of old mobile phones and get yours today at nearly half the price.


How to Buy Old Phone From Cashify
Buying old mobile phone from Cashify is very easy and convenient. You just need to follow the steps below:

- You can visit the website or app. 

- Then, you can click on the Buy Phone section, and select the brand that you want to purchase. 

- Next, choose the model and the condition- Fair, Good, Superb. Based on your choice, the price will be displayed on the screen. 

- You can then move forward and enter your address and payment mode. 

- Make the payment and that’s it! Your device will be delivered to your doorstep.

 

Sell Your Old Phone
Ready to sell old mobile phone ? Cashify makes it easy to get cash for your old mobile phones without leaving home. Simply provide details about your phone, and we’ll offer you the best possible price. It’s quite simple:

- Get an Instant Quote: Enter your phone’s details on our website or app.

- Free Home Pickup: Book a convenient time, and we’ll pick up your phone from your doorstep.

- Instant Cash Payment: Receive cash on the spot upon pickup.


Which Mobile Phone Brands Can Be Sold and Bought On Cashify?

You can find almost all mobile phone brands available in India, along with popular laptop, tablet and gaming console brands. There are more than 20 mobile phone brands listed on Cashify, and for all devices sold on Cashify, we offer -


- Assured sale at best price

- Hassle free

- Free home pick up

- Instant cash payment on pickup


Moreover, there are no privacy concerns with Cashify. We take optimum precautions when buying an old mobile phone. Each old phone goes through a complete data cleaning process, ensuring maximum security for our customers.


You don’t need to be concerned about your old mobile phone brand while selling it through Cashify. The same goes for when you buy old mobile phone.Since we accept old phones of most brands, the selling procedure won’t be a hassle for you. To proceed, you can choose the mobile phone category, your smartphone brand, and the phone model you want to sell. You can also select your mobile brand from the below quick links.


    </pre>
</div>
    </div>
    
  );
};

export default SliderWithServices;
