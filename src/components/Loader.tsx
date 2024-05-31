import './styles.css'

const Loader =()=>{
    return(
        <div className=' font-semibold text-lg  flex items-center'>
         Generating  
        <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader