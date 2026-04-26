import "./Profile.css";


const Profile = () => {
    const userEmail = "Email@fakeastrump.com"

    const handleLogout = () => {
        console.log("Sesion cerrada");
        alert("Has cerrado Sesión");
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h2>Perfil de Usuario</h2>
                <div className="profile-info">
                    <p className="profile-label">Email conectado:</p>
                    <h3 className="profile-email">{userEmail}</h3>
                </div>
                <button 
                    className="btn btn-danger logout-button" 
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                </button>
            </div>
        </div>

    );
};

export default Profile;