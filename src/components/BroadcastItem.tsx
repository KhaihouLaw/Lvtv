type BroadcastItemProps = {
    imageUrl: string;
    date: string;
    title: string;
  };
  
  const BroadcastItem: React.FC<BroadcastItemProps> = ({ imageUrl, date, title }) => {
    return (
      <li className="flex items-center">
        <img
          src={imageUrl}
          alt="Broadcast Title"
          className="w-12 h-12 object-cover mr-4"
        />
        <div>
          <p className="text-sm text-zinc-600">{date}</p>
          <p className="text-base font-medium">{title}</p>
        </div>
      </li>
    );
  };
  
  export default BroadcastItem;