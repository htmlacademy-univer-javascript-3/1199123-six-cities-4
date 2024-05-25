import { Link } from 'react-router-dom';

export function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Извините, страница, которую Вы ищете, не существует</p>
      <p>Вы можете вернуться на <Link to="/">домашнюю страницу</Link></p>
    </div>
  );
}
