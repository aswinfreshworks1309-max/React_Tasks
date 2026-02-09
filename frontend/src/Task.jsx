import React from 'react'
import logo from './assests/logo_light.png'
import insta from './assests/social1.png'
import face from './assests/social2.png'
import man from './assests/user.png'
import p1 from './assests/product1.png'
import p2 from './assests/product2.png'
import p3 from './assests/product3.png'
import f1 from './assests/logo.png'
import f2 from './assests/social_light1.png'
import f3 from './assests/social_light2.png'


const Task = () => {
    return (
        <div>
            <div className='flex justify-between items-center h-[100px] bg-black'>
                <div className='flex gap-[20px]'>
                    <img src={logo} alt="logo image" className='h-[50px] w-[50px] ml-[30px]' />
                    <h1 className='text-white text-[30px]'>LOGO</h1>
                </div>
                <div className='flex w-[200px] gap-[30px]'>
                    <img src={f2} alt="instagram" />
                    <img src={f3} alt="facebook" />
                </div>
            </div>


            <div className='flex h-[500px]  justify-between gap-[50px]'>
                <div><img src={man} alt="man picture" className='h-[700px] w-[1700px]'/></div>
                <div className='p-[20px] w-[1500px]'>
                    <h1 className='text-[50px]'>Introduction Your Products</h1><br />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iusto minus obcaecati rerum saepe placeat consequatur pariatur odit vitae cupiditate quo ratione numquam eum voluptatum at enim sed quasi totam necessitatibus dicta, voluptate omnis? Vero neque rerum reiciendis? Officiis provident, cupiditate reprehenderit accusamus deleniti asperiores hic eveniet dolorem eaque.</p>
<br />
                <h1 className='text-[40px] '>SignUp</h1><br />
                <div className='flex flex-col gap-[20px]'>
                <input type="text" placeholder='Name' className='w-[600px] h-[50px] border-[1px] border-black p-[10px]'/>
                <input type="text" placeholder='Email'  className='w-[600px] h-[50px] border-[1px] border-black p-[10px]' />
                </div>
                <div className='flex w-[600px] justify-end mt-[20px]'>

                    <button className='p-[10px] bg-black text-white w-[100px] rounded-[10px]'>SignUp</button>
                </div>
                </div>
            </div>
            <div className='mt-[220px]'>

            <div className='flex justify-around gap-[50px] p-[20px] justify-between items-center'>
                <div className='p-[80px] w-[800px] gap-[50px]'>
            <h1 className='text-[50px] ml-[80px] '>About Section</h1><br />
                
                <div className='pr-[100px] pl-[80px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi, adipisci eligendi quae praesentium quos veniam autem ullam? Aliquid similique itaque, cum sequi ratione, id distinctio corrupti doloribus at, deserunt perferendis accusantium debitis obcaecati officia rerum? Suscipit, error! Commodi aliquid eos accusamus culpa dignissimos? Eum optio consequatur sunt ratione soluta?</div>
                </div>
               
                <div className='P-[80PX] w-[500px] mt-[70px] pr-[100px]'><p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quis nesciunt natus distinctio, nulla rem totam recusandae vel ratione consequuntur unde sit vitae corrupti dolorum necessitatibus! A eaque culpa perspiciatis quas labore sed nobis ipsa unde! Sed, dolores iure ab, ea officia explicabo, quibusdam magni ut optio consequatur illum atque.</p></div>
          
            </div>
            </div>


            <div className='flex flex-col gap-[20px] mt-[20px]'>  
                   <div className='flex'>
                <div className='p-[50px] bg-black w-[1000px]'>
                    <h1 className='text-[50px] text-white'>Product 1</h1>
                    <h3 className='text-[30px] text-white'> Description</h3>
                    <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, aperiam accusamus repellat aut iure maxime veniam ut odit nisi aliquam quia, consequuntur architecto, libero odio praesentium voluptatem inventore in sed?</p>
                </div>
                <div ><img src={p1} alt="first product" className='w-[1700px] h-[400px]'/></div>
            </div>
                   <div className='flex'>
                <div className='p-[50px] bg-black w-[1000px]'>
                    <h1 className='text-[50px] text-white'>Product 1</h1>
                    <h3 className='text-[30px] text-white'> Description</h3>
                    <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, aperiam accusamus repellat aut iure maxime veniam ut odit nisi aliquam quia, consequuntur architecto, libero odio praesentium voluptatem inventore in sed?</p>
                </div>
                <div ><img src={p2} alt="first product" className='w-[1700px] h-[400px]'/></div>
            </div>
                   <div className='flex'>
                <div className='p-[50px] bg-black w-[1000px]'>
                    <h1 className='text-[50px] text-white'>Product 1</h1>
                    <h3 className='text-[30px] text-white'> Description</h3>
                    <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, aperiam accusamus repellat aut iure maxime veniam ut odit nisi aliquam quia, consequuntur architecto, libero odio praesentium voluptatem inventore in sed?</p>
                </div>
                <div ><img src={p3} alt="first product" className='w-[1700px] h-[400px]'/></div>
            </div>
            </div>

        <div className='flex justify-between w-[100%]'>
            <div className='p-[80px] w-[500px]'>
                <h1 className='text-[50px]'>Get Access</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim unde mollitia? Amet ut fuga veritatis vel expedita? Possimus at, fugit distinctio ducimus saepe facere nobis id odit quasi alias.</p>
            </div>
            <div className='p-[80px]'>
                <h1 className='text-[30px]'>SignUp</h1>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                <input type="text" placeholder='Name' className='w-[500px] p-[10px] border-[1px] border-black'/>
                <input type="text" placeholder='Email' className='w-[500px] p-[10px] border-[1px] border-black'/>
                </div>
                <div className='w-[500px] flex justify-end mt-[10px]'>
                <button className='p-[10px] text-white bg-black w-[100px] rounded-[10px]'>SignUp</button>
                </div>
            </div>
        </div>

        <footer>
                    <div className='flex justify-between items-center h-[100px] '>
                <div className='flex gap-[20px]'>
                    <img src={f1} alt="logo image" className='h-[50px] w-[50px] ml-[30px]' />
                    <h1 className=' text-[30px]'>LOGO</h1>
                </div>
                <div className='flex w-[200px] gap-[30px]'>
                    <img src={insta} alt="instagram" />
                    <img src={face} alt="facebook" />
                </div>
            </div>
        </footer>


       
        </div>
    )
}

export default Task;
