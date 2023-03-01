
const Card = () => {
    return (
        <div className="card">
            <div className="card__image">
                <img src="https://picsum.photos/200/300" alt="random" />
            </div>
            <div className="card__content">
                <h3 className="card__content--title">Card Title</h3>
                <p className="card__content--text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptas, quod, quia, quae nesciunt voluptates quibusdam doloremque
                    tempora libero voluptatem autem. Temporibus, quibusdam. Quos, quas
                    voluptas? Quisquam, quae. Eius, quibusdam.
                </p>
            </div>
        </div>
    );
};

export default Card;