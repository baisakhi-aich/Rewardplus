import React from 'react'
import footermicrosoft from "../../assets/App/1728646283_Mobile app store badge-CakwQpZx.svg"
import footerplaystore from "../../assets/App/1728646283_Mobile app store badge-1-DQ_exAEs.svg"
import footerlogo from "../../assets/Logo/logo.png"
const Footer = () => {
  return (
    <div>
      <footer class="bg-gradient-to-b from-blue-900 to-blue-500 text-white py-10 px-6">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* <!-- Stamp Me Column --> */}
    <div>
      <h4 class="font-semibold text-base mb-4">Rewardplus+</h4>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:underline">Rewardplus+ App</a></li>
        <li><a href="#" class="hover:underline">Pricing</a></li>
        <li><a href="#" class="hover:underline">Rewardplus+ Enterprise</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Resources Column --> */}
    <div>
      <h4 class="font-semibold text-base mb-4">Resources</h4>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:underline">Webinar Demo</a></li>
        <li><a href="#" class="hover:underline">Case Studies</a></li>
        <li><a href="#" class="hover:underline">Help Center</a></li>
        <li><a href="#" class="hover:underline">Ebooks & Guides</a></li>
        <li><a href="#" class="hover:underline">Blog</a></li>
      </ul>
    </div>
{/* 
    <!-- Industries Column --> */}
    <div>
      <h4 class="font-semibold text-base mb-4">Top Industries</h4>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:underline">Cafes & Restaurants</a></li>
        <li><a href="#" class="hover:underline">Beauty Salons</a></li>
        <li><a href="#" class="hover:underline">Retail</a></li>
        <li><a href="#" class="hover:underline">Community & Tourism</a></li>
      </ul>
    </div>

    {/* <!-- Socials & Badges --> */}
    <div>
      <h4 class="font-semibold text-base mb-4">Socials</h4>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:underline">Facebook</a></li>
        <li><a href="#" class="hover:underline">Twitter</a></li>
        <li><a href="#" class="hover:underline">LinkedIn</a></li>
      </ul>
      <div class="flex items-center space-x-4 mt-4">
        <img src={footerplaystore} alt="App Store" class="w-20 h-20  p-1 rounded" />
        <img src={footermicrosoft}alt="Google Play" class="w-20 h-20 p-1 rounded" />
        <img src={footerlogo} alt="AICPA" class="w-20" />
      </div>
    </div>
  </div>

  {/* <!-- Footer Bottom --> */}
  <div class="border-t border-white/30 mt-10 pt-6 text-center text-sm">
    <p>© 2025. All Rights Reserved By WT Makers</p>
    <div class="mt-2 space-x-4">
      <a href="#" class="hover:underline">Privacy Policy</a>
      <a href="#" class="hover:underline">User Terms</a>
      <a href="#" class="hover:underline">Merchant Terms</a>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
