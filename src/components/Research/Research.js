import './Research.css'

const Research = () => {
    return (
        <div className="page-container" id="research-link">
            <h1 className="base-text section-header-text center-text">Research: Engineering Capstone</h1>
            <div className="research-container flex-column base-text">
                <div className="research-text-container">
                    <p>Currently, no solution exists that efficiently and automatically analyzes imagery of coral and identifies the species as well as identify their level of health; healthy, unhealthy (diseased), damaged (physically), bleached and dead. Existing coral identification apps such as Atoll rely on crowd sourced answers from the community, and the Reefs app requires the user to search through the gallery and identify the coral themselves.</p>
                    <br/>
                    <p>Coral imagery data is collected from various different sources, labelled and compiled – pre-labelled datasets can also be used. This data will then be used to train a Convolutional Neural Network (CNN) to automatically classify the species of coral. Coral health imagery data will also be collected. This health data will be used to train the CNN to automatically classify coral health.</p>
                    <br/>
                    <p>An automated coral reef identification solution would reduce a lot of the human effort needed in order to maintain and preserve the health of the Coral Reefs. This will also enable researchers and historians to document a complete timeline of the various corals within the reef. Such a process would be extremely beneficial to marine biologists as it would be an extremely effective way to collect crucial data about coral reefs without any human interaction needed at all. This would also allow for the construction of coral maps and enable researchers to study either the improvement or degradation of coral reef health over time.</p>
                    <br/>
                    <p>Current experimentation with Neural Network Architectures have yielded accuracies of over 87% when tested on the EILAT2 coral database. This model used VGG16 as the base network and added new trainable layers on top to train the new network on the Coral imagery. </p>
                    <br/>
                    <p>This project is still ongoing and will be complete by the end of November 2021.</p>
                </div>
            </div>
        </div>
    )
}

export default Research
