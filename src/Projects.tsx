import './styles/Projects.css'

function Projects() {

    return (
        <>

            <div className="projects-container">

                <h1>Projects</h1>

                <a href='https://apps.apple.com/jp/app/%E3%83%90%E3%83%86%E3%82%B7%E3%82%A7%E3%82%A2/id6642667820?itscg=30200&itsct=apps_box_link&mttnsubad=6642667820'>
                    <div className='card-container'>

                        <h2 style={{ color: 'white' }}>BatteryShare - バッテリー共有SNS</h2>

                        <div className="flex">

                            <div className="swift-circle"></div>
                            <h3 style={{ color: 'white' }}>SwiftUI</h3>

                        </div>

                    </div>
                </a>

                <a href='https://apps.apple.com/jp/app/sakesaga/id6740302156?itscg=30200&itsct=apps_box_link&mttnsubad=6740302156'>
                    <div className='card-container'>

                        <h2 style={{ color: 'white' }}>SAKESAGA - 居酒屋検索アプリ</h2>

                        <div className="flex">

                            <div className="swift-circle"></div>
                            <h3 style={{ color: 'white' }}>SwiftUI</h3>

                        </div>

                    </div>
                </a>

                <a href='https://github.com/Kaito1108/SwiftVisualCode'>
                    <div className='card-container'>

                        <h2 style={{ color: 'white' }}>SwiftVisualCode</h2>

                        <div className="flex">

                            <div className="typescript-circle"></div>
                            <h3 style={{ color: 'white' }}>TypeScript</h3>

                        </div>

                    </div>
                </a>

                <a href='/'>Back To Home</a>

            </div>

        </>
    )

}

export default Projects