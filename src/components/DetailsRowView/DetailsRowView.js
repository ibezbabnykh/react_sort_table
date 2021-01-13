import React from 'react';
import PropTypes from 'prop-types';

const DetailsRowView = ({ person }) => {
  const { firstName, lastName, description, address } = person;

  return (
    <div>
      <p>Выбран пользователь <b>{`${firstName} ${lastName}`}</b></p>
      <div>
        Описание:
        <div>
          <textarea defaultValue={description}></textarea>
        </div>
      </div>
      <ul>
        <li>Адрес проживания: <b>{address.streetAddress}</b></li>
        <li>Город: <b>{address.city}</b></li>
        <li>Провинция/штат: <b>{address.state}</b></li>
        <li>Индекс: <b>{address.zip}</b></li>
      </ul>
    </div>
  );
}

DetailsRowView.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.shape({
      streetAddress: PropTypes.string,
      city: PropTypes.string
    })
  }).isRequired
};

export default DetailsRowView;