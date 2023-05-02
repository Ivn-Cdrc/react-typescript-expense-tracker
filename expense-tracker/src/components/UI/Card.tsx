import './Card.css';

interface CardProps {
    children: React.ReactNode;
    className: string;
}

// this card component acts as a shell around both our Expenses and ExpenseItem components
// we can use card to give other components predefined styles automatically
// Card is supposed to act as a reusable wrapper component
function Card({children, className}: CardProps) {
	const classes: string = 'card ' + className

  return <div className={classes}>{children}</div>;
}

export default Card;