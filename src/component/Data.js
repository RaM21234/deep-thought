import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import info from '../images/info.png'
import bulb from '../images/bulb.png'
import message from '../images/message.png'
import lotus from '../images/lotus.png'
import que from '../images/que.png'
import question from '../images/question.png'
import meeting from '../images/meeting.png'
import schedule from '../images/schedule.png'
import right from '../images/right.png'
import left from '../images/left.png'
import ellipsish from '../images/ellipsish.png'
import fullscreen from '../images/fullscreen.png'
import Sidebar from './Sidebar'



const Data = () => {

  const [apidata, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {

    const response = await fetch('http://localhost:5000/getData');
    const jsonData = await response.json();
    setData(jsonData);
  };
  console.log(apidata)


  if (apidata === null) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <Navbar />
      <Sidebar data={apidata} />
      <div className="container "  >


        <div className="container my-5 ">
          <h1 style={{ color: 'blue', fontWeight: "bold" }}>{apidata.tasks[0].assets[0].asset_title}<button type="button" className="btn px-3" style={{ backgroundColor: 'blue', color: 'white', marginLeft: '550px' }}>Submit Task</button></h1>
        </div>
        <div className="container my-4" style={{ backgroundColor: '#e9e9e9' }}>
          <div className="container py-4 px-2" style={{ fontWeight: 'bolder', fontSize: '25px', fontFamily: 'sans-serif' }}>
            {apidata.tasks[0].task_title}
          </div>
          <div className="container pb-4" style={{ fontFamily: 'sans-serif' }}>
            {apidata.tasks[0].task_description}
          </div>
        </div>


        <div className="container py-5  " style={{ paddingLeft: '90px' }}>
          <div className="row " >

            <div className="col-6 py-4 ">
              <div className="card  rounded-4" style={{ width: '480px', height: '580px' }}>
                <div className="card-header text-center rounded-top-4 py-3 " style={{ backgroundColor: 'black', color: 'white' }}>
                  {apidata.tasks[0].assets[0].asset_title}<img className="rounded-circle " alt="" src={info} style={{ backgroundColor: 'white', height: '22px', marginLeft: '150px' }}></img>

                </div>
                <div className="card-body">
                  <p><b>Description</b>:  {apidata.tasks[0].assets[0].asset_description}</p>

                  <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/TiMRwri1xJ8" title="YouTube video" allowFullScreen></iframe>
                  </div>

                </div>

              </div>
            </div>

            <div className="col-6 py-4 ">
              <div className="card  rounded-4" style={{ width: '480px', height: '580px' }}>
                <div className="card-header text-center rounded-top-4 py-3 " style={{ backgroundColor: 'black', color: 'white' }}>
                  {apidata.tasks[0].assets[1].asset_title}<img className="rounded-circle " alt="" src={info} style={{ backgroundColor: 'white', height: '22px', marginLeft: '290px' }}></img>

                </div>
                <div className="card-body">
                  <p><b>Description</b>:  {apidata.tasks[0].assets[1].asset_description}</p>


                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne21" aria-expanded="true" aria-controls="collapseOne21">
                          <b>Thread A</b>
                        </button>
                      </h2>
                      <div id="collapseOne21" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <div className="row py-2">
                            <div className="col-md-6">
                              <div className="border rounded-3" style={{ width: '180px' }}>
                                <div className="mb-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label px-2">Sub Thread 1</label>
                                  <input type="text" className="form-control border border-white" style={{ height: '50px' }} id="exampleFormControlInput1" placeholder="Enter Text Here" />
                                </div>
                              </div>

                            </div>
                            <div className="col-md-6">
                              <div className="border rounded-3" style={{ width: '180px' }}>
                                <div className="mb-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label px-2">Sub Interpretation 1</label>
                                  <input type="text" className="form-control border border-white" style={{ height: '50px' }} id="exampleFormControlInput1" placeholder="Enter Text Here" />
                                </div>
                              </div>

                            </div>
                          </div>

                          <div className=" py-3">
                            <img src={bulb} className="mx-1" style={{ height: '20px', paddingLeft: '85px' }} alt=""></img>
                            <img src={message} className="mx-1" style={{ height: '20px' }} alt=""></img>
                            <img src={que} className="mx-1" style={{ height: '20px' }} alt=""></img>
                            <img src={lotus} className="mx-1" style={{ height: '20px' }} alt=""></img>
                            <span> <button className="rounded-3 py-1 px-2" style={{ fontSize: '13px' }}>Select Categ</button></span><span className="px-2"><button className="rounded-3 py-1 px-2" style={{ fontSize: '13px' }}>Select Categ</button></span>


                          </div>
                          <button className="rounded-3 py-1 px-3" style={{ backgroundColor: 'blue', color: 'white', fontSize: '13px' }}>Sub-thread</button>
                          <div className="col-md-6 pt-4">
                            <div className="border rounded-3" style={{ width: '400px' }}>
                              <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label px-2">Summary for Thread A</label>
                                <input type="text" className="form-control border border-white" style={{ height: '50px' }} id="exampleFormControlInput1" placeholder="Enter Text Here" />
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div className="col-6 py-4 ">
              <div className="card  rounded-4" style={{ width: '480px', height: '580px' }}>
                <div className="card-header text-center rounded-top-4 py-3 " style={{ backgroundColor: 'black', color: 'white' }}>
                  {apidata.tasks[0].assets[2].asset_title}<img className="rounded-circle " alt="" src={info} style={{ backgroundColor: 'white', height: '22px', marginLeft: '220px' }}></img>

                </div>
                <div className="card-body">
                  <p><b>Description</b>:  {apidata.tasks[0].assets[2].asset_description}</p>
                  <div className="container">
                    <div className="py-2">
                      <span className=" px-2"><b>Title</b></span>
                      <div className="border rounded-3 py-1" style={{ width: '400px' }}>

                        <div className="mb-3">

                          <input type="text" className="form-control border border-white" style={{ height: '50px' }} id="exampleFormControlInput1" placeholder="Enter Text Here" />
                        </div>
                      </div>

                    </div>
                    <div className="py-3">

                      <span className=" py-3px-2"><b>Content</b></span>
                      <div className="border rounded-3 py-1" style={{ width: '400px' }}>

                        <div className="mb-3">

                          <div className="container" style={{ fontSize: '13px' }}>
                            <button className='border border-white rounded-2 px-1' style={{ backgroundColor: 'white' }}>File</button>
                            <button className='border border-white  rounded-2 px-1' style={{ backgroundColor: 'white' }}>Edit</button>
                            <button className='border border-white  rounded-2 px-1' style={{ backgroundColor: 'white' }}>View</button>
                            <button className='border border-white  rounded-2 px-1' style={{ backgroundColor: 'white' }}>Insert</button>
                            <button className='border border-white  rounded-2' style={{ backgroundColor: 'white' }}>Format</button>
                            <button className='border border-white  rounded-2' style={{ backgroundColor: 'white' }}>Tools</button>
                            <button className='border border-white  rounded-2' style={{ backgroundColor: 'white' }}>Table</button>
                            <button className='border border-white  rounded-2' style={{ backgroundColor: 'white' }}>Help</button>
                          </div>
                          <div className="container mt-2" style={{ fontSize: '13px' }}>
                            <img className="px-2" src={left} alt="" style={{ height: '20px' }}></img>
                            <img src={right} className="px-2" alt="" style={{ height: '20px' }}></img>
                            <img src={fullscreen} className="px-2" alt="" style={{ height: '20px' }}></img>
                            <button className='border px-2 rounded-2' style={{ backgroundColor: 'white' }}>Paragraph</button>
                            <img src={ellipsish} className="px-2" alt="" style={{ height: '20px' }}></img>

                          </div>

                          <div className="border rounded-3 py-3 mt-3" style={{ width: '400px' }}>

                            <div className="mb-3">
                              <input type="text" className="form-control border border-white" style={{ height: '65px' }} id="exampleFormControlInput1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>

              </div>
            </div>

            <div className="col-6 py-4 ">
              <div className="card  rounded-4" style={{ width: '480px', height: '580px' }}>
                <div className="card-header text-center rounded-top-4 py-3 " style={{ backgroundColor: 'black', color: 'white' }}>
                  {apidata.tasks[0].assets[3].asset_title}<img className="rounded-circle " alt="" src={info} style={{ backgroundColor: 'white', height: '22px', marginLeft: '290px' }}></img>
                </div>


                <div className="card-body">
                  <p><b>Description</b>:  {apidata.tasks[0].assets[3].asset_description}</p>



                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne41" aria-expanded="true" aria-controls="collapseOne41">
                          <b>Introduction</b>
                        </button>
                      </h2>
                      <div id="collapseOne41" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          The 4SA Method, How to bring a idea into process?
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <b>Thread A</b>
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          How are you going to develop your strategy? Which method are you going to use to develop a strategy?What if the project is lengthy?
                          <div className="container">
                            <h5 className="border py-2 mt-2" style={{ paddingLeft: '20px' }}>Example 1</h5>
                            <p>You have a concept; how will you put it into practice to create a product? How will you organize the final product? Can the product's MVP be created in a week?How will you come up with a plan? Do you need a strategy or just a plan to succeed?</p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <b>Transition 1</b>
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          For preparing the strategy from the concept and build it into product one of the methods used is the 4SA approach.
                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <b>Thread B</b>
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >

                          <div className="container">
                            <h5 className="border py-2 mt-2" style={{ paddingLeft: '20px' }}>Example 1</h5>
                            <p>Story for Alignment: Using the concepts we already have, let's create a toy story to explain why the project is being built. By including Raju Chitu in the narrative, let's provide a real-world illustration of how that product will be used by actual customers. That will be a macro story in which we develop an actual product from a concept. But what about the product's finer points? How can we illustrate real-world examples of Raju and Chitu using our product? Here is the micro story where the product's uses are explained. We now have a local, global, and macro perspective of the product.Micro and macro stories are interconnected; as we construct one, we may end up with the other.</p>
                          </div>
                          <div className="container">
                            <h5 className="border py-2 mt-2" style={{ paddingLeft: '20px' }}>Example 2</h5>
                            <p>Scope of Agility: Because there was no visual representation of the product, we failed to account for four key factors: user value, functionality, UX flow, and user emotions.In order to determine the scope of agility, we define the fundamental aesthetics and wireframe of the product. To provide a clear image for creating a mental map of the product, the wireframe would be as straightforward as is practical.</p>
                          </div>
                          <div className="container">
                            <h5 className="border py-2 mt-2" style={{ paddingLeft: '20px' }}>Example 3</h5>
                            <p>Specific Accountable:Everything is clear in the idea, concept, and flow diagram. The product is ready for use. But how? What is lacking and what can cause the product to stop? The product's architecture does not exist right now. We described market placed visuals as having everything but the product's backbone.We will outline every aspect of the product in this step. The figures for data modals, APIs, and front-end screens will all be defined in this part of the accountability process.</p>
                          </div>
                          <div className="container">
                            <h5 className="border py-2 mt-2" style={{ paddingLeft: '20px' }}>Example 4</h5>
                            <p>Staggered approach:Up until this point in the product's management, we are gathering everything. Everything is currently in our hands. However, how are we going to approach it, what are dependencies, and how do we determine an element's dependence on the product? Which would come in first and which second? What are the product's phases, steps, and breakdown, and how many of them are there? This product management step will determine each milestone.</p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          <b>Conclusion</b>
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          The product is now ready to launch; we have a strategy-based plan from an innovative concept.
                        </div>
                      </div>
                    </div>
                  </div>



                </div>

              </div>
            </div>


          </div>

        </div>
        <div className="" style={{ position: 'absolute', left: '1600px', top: '1600px' }}>
          <div className="py-2">
            <img src={question} alt="" style={{ height: '110px' }}></img>

          </div>
          <div className="py-2">
            <img src={meeting} alt="" style={{ height: '100px' }}></img>

          </div>
          <div className="py-2">
            <img src={schedule} alt="" style={{ height: '100px' }}></img>

          </div>


        </div>

      </div>

    </>
  )
}

export default Data
