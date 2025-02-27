import { JSX } from "react"; 
function NotFoundPage(): JSX.Element {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1 style={{ fontSize: '72px', marginBottom: '10px' }}>404</h1>
        <h2>Страница не найдена</h2>
        <p>К сожалению, запрашиваемая страница не существует.</p>
        <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
          Вернуться на главную
        </a>
      </div>
    );
}
  
export default NotFoundPage;
  
