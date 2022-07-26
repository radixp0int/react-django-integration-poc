import './App.css';

function App() {
    return (
        <div className="App">
            <h1 className='center-column'> React-Django Integration Steps</h1>
            <div className="center-column">

                <div className="item-row">
                    <span>Create Django Project: <code>django-admin startproject appname</code></span>
                </div>

                <div className="item-row">
                    <span>Create React app: <code>npx create-react-app appname</code></span>
                </div>

                <div className="item-row">
                    <span>Drag the React app into root directory of Django project</span>
                </div>

                <div className="item-row">
                    <span>Configure TEMPLATES > DIRS to add the BUILD file path in <code>settings.py</code></span>
                </div>

                <div className="item-row">
                    <span>In <code>urls.py</code> Add import and add to urlpatterns to find the React index.html template</span>
                </div>

                <div className="item-row">
                    <span>Configure STATICFILES_DIRS in <code>settings.py</code> to find all React HTML, CSS and JS files</span>
                </div>

                <div className="item-row">
                    <span>cd into react app and run <code>npm run build</code></span>
                </div>

                <div className="item-row">
                    <span>cd into manage.py location and run <code>python manage.py runserver</code></span>
                </div>
            </div>

        </div>
    );
}

export default App;
