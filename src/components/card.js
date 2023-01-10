// import Card from 'react-bootstrap/Card';
// import React from 'react';

// function Option({title, about}) {
//   return (
//     <Card className="bg-dark text-white">
//       <Card.Img src="../images/menu.jpg" alt="Menu Image" />
//       <Card.ImgOverlay>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//           {about}
//         </Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//   );
// }

// export default Option;

import React from 'react';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';

const Option = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.about}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Option;
