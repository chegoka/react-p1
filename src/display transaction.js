import React from "react";

function DisplayTransactions(props){

    return(


    <div>
<h1>history of your transaction</h1>


{props.transactions.map((data) => (

    <div>
        <div classname=" list-item">

            <div><h6>data.transactionItem</h6>
            
            </div>

            <div><h6>data.amount</h6>
            
            </div>

            <div><h6>data.transactionType</h6>
            
            </div>
            
            

        </div>


    </div>

))}

</div>

    );
}



export default DisplayTransactions