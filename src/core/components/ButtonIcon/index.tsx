import './styles.scss';

type Props = {
    text: string;
    url?: string;
}

const ButtonIcon = ({ text, url }: Props) => (
    <button className="btn-start-home">
        <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
        
    </button>
);

export default ButtonIcon;