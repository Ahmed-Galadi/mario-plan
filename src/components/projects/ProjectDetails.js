import React from 'react'

const ProjectDetais = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">

        <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">Project Title - {id}</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid.
              </p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted By Ahmed Galadi</div>
                <div>2 September, 2am</div>
            </div>
        </div>

    </div>
  )
}

export default ProjectDetais
