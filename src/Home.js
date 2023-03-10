import logo from './Images/T-short.jpg'
import logo1 from './Images/BackPack.jpg'
import logo2 from './Images/Coat.jpg'
import logo3 from './Images/Shoes.jpg'
import logo4 from './Images/Trousers.jpg'
import Nav from './Nav'
export default function Products(){
    return(
        <Nav>
        <div className='Products'>
              <input type ="checkbox" /> <img src={Logo} id='T-short'/> <h5>1233$</h5>
              <input type ="checkbox" /> <img src={Logo1} id='BackPack'/> <h5>45678$</h5>
              <input type ="checkbox" /> <img src={Logo2} id='Coat'/> <h5>6789$</h5>
              <input type ="checkbox" /> <img src={Logo3} id='Shoes'/> <h5>56677$</h5>
              <input type ="checkbox" /> <img src={Logo4} id='Trousers'/> <h5>45678$</h5>
        </div>
        </Nav>
    )
}

            function removeItem(itemId){
        dispatch({type : "remove_user", payload: itemId})
    }

    return <div  className="Products">
        <form action ="" onSubmit={addProducts}>
            <input 
            type="text" 
            value={value} 
            onChange={e => setValue(e.target.value)}
            ref ={inputRef}
            />
        </form>
      <ul> 
                {
                products.map(item =>( 
                    <li key={item.id}  > 
                    {item.title}
                    <button onClick={() => removeItem(item.id)}> Remove</button> 

                    </li>   
                ))
                }
            </ul>
            
                    
            <div className='clean'>
        <link to='#'><button>Clean Cart</button></link> 
            </div>
         
    </div>
}




export default Products;

      

       
