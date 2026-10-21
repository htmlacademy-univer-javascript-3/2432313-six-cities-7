import { Link } from 'react-router-dom';
import { AppRoute } from '../../routes';

function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Такой страницы не существует.</p>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
