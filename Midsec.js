import '../styles/Mid.css' 
 import { useState } from "react";
function Mid() {
    const [data, setdata] = useState([
        {
            id:'1',
            header: "New Zealand News",
            Image1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/231700/231705.3.jpg",
            Image2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/342600/342690.6.jpg",
            title1: "Williamson: Guptill will be missed but he has not retired",
            title2: "Guptill released from New Zealand central contract",
            text: "NZ captain opens up about the way forward with more players choosing to go the franchise T20 way",
            text1: "The opening batter has lost his spot in ODIs and T20s over recent months and will now explore league opportunities "

        },
        {
            id:'2',
            header: "Pakistan News",
            Image1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/338200/338292.6.jpg",
            Image2: "https://www.insidesport.in/wp-content/uploads/2022/08/Screenshot-677.png?w=669",
            title1: "Hasan Ali signs four-month deal with Warwickshire for 2023 season",
            title2: "Shaheen is facing a major hamstring injury in the training session",
            text: "Seamer switches counties after successful stint with Lancashire last season ",
            text1: "He will undergo a major surgery in an attempt to recover asap"

        }
    ]);
    function handleDelete(id)
    {
        const Delete = data.filter((dataDelete)=>dataDelete.id !== id);
        setdata(Delete);

    }
    return (
        <div className='mainid'>
            {
                data.map((d) => (
                    <div className='Mid_four'>
                        <div id="mid1" class="card text-bg-light mb-3">
                        <div class="card-header">{d.header}</div>
                        <div class="card-body" key={d.id}>
                            <div class="card mb-3">
                            <img src={d.Image1}/>
                                <div class="card-body">
                                    <h5 class="card-title">{d.title1}</h5>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-8 ">
                                    <img className='s-Img' src={d.Image2}/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{d.title2}</h5>
                                            <p>{d.text1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={()=> handleDelete(d.id)}>Delete</button>
                        </div>
                    </div>

                    </div>
                ))
            }
        </div>
    );
}

export default Mid;
