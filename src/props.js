import { getImageUrl } from './utils.js';
import './props.css';

function Avatar({ person, size=200 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
    return (
      <div>
        {children}
      </div>
    );
  }

export default function Profile() {
  return (
    <div>
    <Card>
        <div className='col'> <Avatar
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      /></div>
     
      <Avatar 
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
         size={100}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      </Card>
    </div>
  );
}
