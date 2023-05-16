import PropTypes from 'prop-types';
import style from './stylesHijo.css?inline';

const ComponentHijo = ({ texto }) => {
  console.log(texto);
  return (
    <div className={style.ch}>
      <h2>Hola {texto}</h2>
    </div>
  );
};

ComponentHijo.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default ComponentHijo;
