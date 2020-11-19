import React, { useState } from 'react';
import "./Card.scss"

interface CardProps {
    handleSubmit(cardNumber: string, cardYear: string, cardMonth: string, cardCVV: string): any
}

const Card: React.FC<CardProps> = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026]

    const [card, setCard] = useState({
        cardNumber: "",
        cardYear: "2020",
        cardMonth: "January",
        cardCVV: ""
    })


    return (
        <div className="card">
            <header className="card__header">
                <h3 className="card__title">Payment Details</h3>
            </header>

            <form action="" method="post" className="form">

                <div className="card__number form__field">
                    <label className="card__number__label">Card Number
                         <input value={
                            card.cardNumber
                        }
                            onChange={(e) => {
                                setCard(prev => {
                                    return {
                                        ...prev,
                                        cardNumber: e.target.value
                                    }
                                })
                            }
                            }
                            type="text" id="card__number" className="card__number__input" placeholder="0000 0000 0000 0000" minLength={16} maxLength={16} required pattern="[0-9]{16}" title="Only numbers are allowed"/>
                    </label>
                </div>

                <div className="card__expiration form__field">
                    <label>Expiration
                        <select required value={card.cardMonth} onChange={(e) => {
                            setCard(prev => {
                                return {
                                    ...prev,
                                    cardMonth: e.target.value
                                }
                            })
                        }}>

                            {months.map((month, index) => {
                                return <option key={index} value={month} >
                                    {month}</option>
                            })}

                        </select >
                    </label>

                    <select required onChange={(e) => {
                        setCard(prev => {
                            return {
                                ...prev,
                                cardYear: e.target.value
                            }
                        })
                    }}>
                        {years.map((year, index) => {
                            return <option key={index} value={year}>{year}</option>
                        })}
                    </select>

                    <div className="card__ccv ">
                        <label >CCV
                                <input type="text" className="card__ccv__input" value={card.cardCVV} onChange={(e) => {
                                setCard(prev => {
                                    return {
                                        ...prev,
                                        cardCVV: e.target.value
                                    }
                                })
                            }} placeholder="583" minLength={3} maxLength={3} required pattern="[0-9]{3}" title="Only numbers are allowed"/>
                        </label>
                    </div>
                </div>
                <button  onClick={() => props.handleSubmit(card.cardNumber, card.cardYear, card.cardMonth, card.cardCVV)} >Submit</button>
            </form>


        </div>
    )
}

export default Card;
