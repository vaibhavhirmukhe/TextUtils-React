import React from 'react'

export default function About(props) {
    
  return (
    <div>
        <div className="container" style={{ color : props.mode==="dark"?"white":"black"}}>
            <h1 className="text-center my-3">{props.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam odit sit animi fugiat praesentium quidem laborum. Delectus eius inventore odio suscipit provident laborum illum, dicta earum minima ad excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere ipsa maxime incidunt nemo at, aut, hic consequuntur autem voluptates, ipsam impedit ab quae iste repellat eos cupiditate voluptatem eveniet. Illo facere placeat nisi quibusdam corporis, dicta, in est, esse accusantium nobis aperiam. Officia fuga velit consequuntur omnis dolore dolorum reiciendis! Illum tempora consectetur assumenda molestiae nobis neque recusandae. Eveniet ut laudantium ducimus nihil enim laboriosam nemo optio numquam autem mollitia rem, dicta assumenda? Necessitatibus dolorem ratione accusamus. Repudiandae pariatur magnam cum corporis, iure commodi aspernatur illo laboriosam molestiae temporibus, provident aperiam nesciunt reprehenderit quisquam veniam dignissimos ipsum neque repellat?</p>
        </div>
    </div>
  )
}
