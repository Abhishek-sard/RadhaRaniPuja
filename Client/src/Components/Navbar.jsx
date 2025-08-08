import { useState } from 'react';
import { FaFacebook, FaInstagram, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from '../../public/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);

  const categories = [
    {
      name: "Laptops",
      subcategories: [
        { name: "Gaming Laptops", items: ["High Performance", "Budget Gaming"] },
        { name: "Business Laptops", items: ["Ultrabooks", "Durable Models"] },
        { name: "Convertibles", items: ["2-in-1", "Detachable"] }
      ]
    },
    {
      name: "Computers",
      subcategories: [
        { name: "Desktops", items: ["All-in-One", "Tower"] },
        { name: "Components", items: ["CPUs", "GPUs", "Motherboards"] },
        { name: "Peripherals", items: ["Monitors", "Keyboards"] }
      ]
    },
    {
      name: "Parts",
      subcategories: [
        { name: "Storage", items: ["SSD", "HDD", "NVMe"] },
        { name: "Memory", items: ["RAM", "Cache"] },
        { name: "Cooling", items: ["Fans", "Liquid Cooling"] }
      ]
    }
  ];

  const toggleMobileCategory = (categoryName) => {
    setMobileActiveCategory(mobileActiveCategory === categoryName ? null : categoryName);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Company Logo" className="h-16 w-16 object-contain" />
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 mx-auto px-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-4 px-2 font-semibold transition duration-300 ${
                  isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'
                }`
              }
            >
              Home
            </NavLink>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseLeave={() => {
                setActiveCategory(null);
                setActiveSubcategory(null);
              }}
            >
              <button className="flex items-center py-4 px-2 font-semibold text-gray-500 hover:text-blue-500 transition duration-300">
                Products
              </button>

              {/* Dropdown menu on hover */}
              <div className="absolute left-0 top-full mt-0 w-[600px] bg-white shadow-lg rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 flex">
                {/* Categories list */}
                <div className="w-1/3 border-r border-gray-200">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      onMouseEnter={() => {
                        setActiveCategory(category.name);
                        setActiveSubcategory(null); // reset subcategory on category change
                      }}
                      className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                        activeCategory === category.name
                          ? 'bg-gray-100 font-semibold text-blue-600'
                          : 'text-gray-700'
                      }`}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>

                {/* Subcategories list */}
                <div className="w-1/3 border-r border-gray-200 bg-gray-50">
                  {activeCategory &&
                    categories
                      .find((cat) => cat.name === activeCategory)
                      ?.subcategories.map((subcategory) => (
                        <div
                          key={subcategory.name}
                          onMouseEnter={() => setActiveSubcategory(subcategory.name)}
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                            activeSubcategory === subcategory.name
                              ? 'bg-gray-200 font-semibold text-blue-600'
                              : 'text-gray-700'
                          }`}
                        >
                          <NavLink
                            to={`/products/${activeCategory.toLowerCase()}/${subcategory.name.toLowerCase()}`}
                            className="block"
                          >
                            {subcategory.name}
                          </NavLink>
                        </div>
                      ))}
                </div>

                {/* Third-level items */}
                <div className="w-1/3 bg-gray-100">
                  {activeCategory && activeSubcategory && (
                    categories
                      .find((cat) => cat.name === activeCategory)
                      ?.subcategories.find((sub) => sub.name === activeSubcategory)
                      ?.items.map((item) => (
                        <NavLink
                          key={item}
                          to={`/products/${activeCategory.toLowerCase()}/${activeSubcategory.toLowerCase()}/${item.toLowerCase()}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
                        >
                          {item}
                        </NavLink>
                      ))
                  )}
                </div>
              </div>
            </div>

       

    

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-4 px-2 font-semibold transition duration-300 ${
                  isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Social Icons on right */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
              {isOpen ? (
                <FaTimes className="w-6 h-6 text-gray-500" />
              ) : (
                <FaBars className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block py-3 px-4 ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
          }
        >
          Home
        </NavLink>

        {/* Mobile Products dropdown */}
        <div className="border-t border-gray-100">
          <button className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-100">
            Products
            <FaChevronDown className="text-xs" />
          </button>

          <div className="bg-gray-50">
            {categories.map((category) => (
              <div key={category.name} className="border-t border-gray-100">
                <button
                  onClick={() => toggleMobileCategory(category.name)}
                  className="flex justify-between items-center w-full py-2 px-6 text-gray-700 hover:bg-gray-100"
                >
                  <span>{category.name}</span>
                  {mobileActiveCategory === category.name ? (
                    <FaChevronUp className="text-xs" />
                  ) : (
                    <FaChevronDown className="text-xs" />
                  )}
                </button>

                {mobileActiveCategory === category.name && (
                  <div className="bg-gray-100">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.name} className="border-t border-gray-200">
                        <NavLink
                          to={`/products/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}`}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-8 text-gray-700 hover:bg-gray-200"
                        >
                          {subcategory.name}
                        </NavLink>
                        <div className="bg-gray-200 pl-8">
                          {subcategory.items.map((item) => (
                            <NavLink
                              key={item}
                              to={`/products/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}/${item.toLowerCase()}`}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-300"
                            >
                              {item}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `block py-3 px-4 border-t border-gray-100 ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          Contact
        </NavLink>

        {/* Social Icons for mobile */}
        <div className="flex py-3 px-4 space-x-4 border-t border-gray-100">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;