

const HeaderBody = () => {
    return (
        <>
        <header className='w-full bg-blue-800  h-16'>
        

        <div className='container mx-auto px-36 flex flex-row items-center justify-between pt-2' >
        <img className='w-12' src="https://www.zerotonerdy.com/content/logos/circles-nobg.png" alt="" />
      <nav>
        <ul className='flex flex-row items-center justify-between gap-6 font-bold text-lg text-gray-50' >
          <li>
            <a href="#">home</a>
            </li>
            <li>
            <a href="#">Lifestyle</a>
            </li>
            <li>
            <a href="#">Health & Wellness</a>
            </li>
            <li>
            <a href="#">Relationships</a>
            </li>
            <li>
            <a href="#">Worth</a>
            </li>
            <li>
            <a href="#">Entertainment</a>
            </li>
            <li>
            <a href="#">Explore</a>
            </li>

        </ul>
      </nav>
       
      <div className='flex flex-row gap-4 items-center text-gray-50'>

        <div>
          <a href="#">
      <span class="material-symbols-outlined">
       search
        </span>
      </a>
        </div>
      
      <a href="#">
      <span class="material-symbols-outlined">
        menu
         </span>
      </a>
      </div>
      </div>

        
     
      
    </header>
        </>
        
        
    );
}

export default HeaderBody;
