import ProductContainer from "../Component/ProductContainer/ProductContainer";
import classes from './StoreInformation.module.css'
function StoreInformation ()
{
    
    
    return ( <>
        <div className={classes.header}>
    <h1 className={classes['header-text']}>The Generic</h1>
  </div>
        <ProductContainer />
        </>
    )
}

export default StoreInformation