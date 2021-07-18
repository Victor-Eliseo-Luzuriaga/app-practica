import Cards from "./Cards"
import celebridades from '../helpers/usuarios'

const ListCards = (props) => {
    
    
    return (      
        <div className="container">
           <div className="row">
           {celebridades.map(user => (
              <div className="col-sm-6 col-md-4 col-lg3-4" key={user.login.uuid}>
                  <Cards user={user}/>
             </div>
            ))}
           
        </div>
    </div>
    )
}

export default ListCards
