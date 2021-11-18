import { GiChestnutLeaf } from 'react-icons/gi'

const Content = () => {
    return (
        <section className="content">                        
            <div>
                <h1 className="title">Plants make a<br/> positive impact on <br/> your environment.</h1>
                <p className="paragrafy">Provide your house &amp; office space with the right plants and let<br/> our plant care team keep them flourishing.</p>
                <div className="buttons">
                    <button className="button book-now">Book now</button>
                    <button className="button know-more">Know more <GiChestnutLeaf className="GiChestnutLeaf" /></button>
                </div>
            </div>
            <img src="../../assets/arte-folha.png" alt="photo-plant-marketing" className="photo" />
        </section>
        
    )
}

export default Content;