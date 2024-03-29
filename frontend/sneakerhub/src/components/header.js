// Header.jsx
import {React,useState,useEffect} from 'react';
import styles from '../styles/Header.module.css'; // Importing CSS module
import searchIcon from '../images/search.svg';
import userIcon from '../images/user.svg';
import heartIcon from '../images/heart.svg';
import cartIcon from '../images/cart.svg';
import logo from '../images/logo_sneakerhub.png';
import api from '../api';
function Header({setProducts}) {
  const [subcategories, setSubcategories] = useState({
    men: [],
    women: [],
    kids: [],
  });
  // const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState({
    men: false,
    women: false,
    kids: false,
  });

  // Function to fetch subcategories for a specific category
  const fetchSubcategoriesForCategory = async (category) => {
    try {
      const response = await api.get(`/category/${category}`);
      const data = response.data;
      console.log(data);
      setSubcategories((prevSubcategories) => ({
        ...prevSubcategories,
        [category]: data,
      }));
    } catch (error) {
      console.error(`Error fetching ${category} subcategories:`, error);
    }
  };
  

  useEffect(() => {
    fetchSubcategoriesForCategory('men');
    fetchSubcategoriesForCategory('women');
    fetchSubcategoriesForCategory('kids');
  }, []); // Fetch subcategories only once when the component mounts

  // Function to handle mouse hover
  const onClickSubCategory = (category) => {
    if(isHovered[category]){
      setIsHovered((prevIsHovered) => ({
        ...prevIsHovered,
        [category]: false,
      }));
    }
    else{
      setIsHovered((prevIsHovered) => ({
        ...prevIsHovered,
        [category]: true,
      }));
    }
    
  };

  // Function to handle mouse leave
  // const handleMouseLeave = (category) => {
  //   setIsHovered((prevIsHovered) => ({
  //     ...prevIsHovered,
  //     [category]: false,
  //   }));
  // };

  //function to handle subcategory click
  const getProductBySubCategory = async (event, categoryId) => {
    try {
      // const categoryId = event.target.getAttribute('data-cid');
      const response = await api.get(`/products/category/${categoryId}`);
      
      const data = response.data;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error(`Error fetching subcategory products:`, error);
    }
  };
  

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li
            className={styles.navItem}
            onClick={()=>onClickSubCategory('men')}
            // onMouseEnter={() => onClickSubCategory('men')}
            // onMouseLeave={() => handleMouseLeave('men')}
          >
            <a href="#">Men</a>
            {isHovered.men && (
              <ul className={styles.subcategoryList}>
                 {subcategories.men.map((subcategory) => (
 <li key={subcategory.cid}  onClick={(event) => getProductBySubCategory(event, subcategory.cid)}>{subcategory.subCategory}
</li>                ))}
              </ul>
            )}
          </li>
          <li
            className={styles.navItem}
            // onMouseEnter={() => onClickSubCategory('women')}
            // onMouseLeave={() => handleMouseLeave('women')}
            onClick={()=>onClickSubCategory('women')}
          >
            <a href="#">Women</a>
            {isHovered.women && (
              <ul className={styles.subcategoryList}>
                 {subcategories.women.map((subcategory) => (
 <li key={subcategory.cid}  onClick={(event) => getProductBySubCategory(event, subcategory.cid)}>{subcategory.subCategory}
</li>                ))}
              </ul>
            )}
          </li>
          <li
            className={styles.navItem}
            // onMouseEnter={}
            // onMouseLeave={() => handleMouseLeave('kids')}
            onClick={() => onClickSubCategory('kids')}
          >
            <a href="#">Kids</a>
            {isHovered.kids && (
              <ul className={styles.subcategoryList}>
                {subcategories.kids.map((subcategory) => (
 <li key={subcategory.cid}  onClick={(event) => getProductBySubCategory(event, subcategory.cid)}>{subcategory.subCategory}
</li>                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <img src={searchIcon} alt="Search" className={styles.searchIcon} />
      </div>
      <div className={styles.icons}>
        <img src={userIcon} alt="User" className={styles.icon} />
        <img src={heartIcon} alt="Heart" className={styles.icon} />
        <img src={cartIcon} alt="Cart" className={styles.icon} />
      </div>
    </header>
  );
}

export default Header;
