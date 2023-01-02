const LobbyForm = ({ selectedCat }) => {

    return (
        <div className="lobby-form-container">
            <div className="form-content">
                <h1>LOBBY FORM</h1>
                <form>
                    <label>
                        Lobby Name: <br/>
                        <input type="text" name="name" />
                    </label>
                    <br />
                    <label>
                        Password: <br/>
                        <input type="password" name="password" />
                    </label>
                    <br />
                    <label>
                        Number of players: <br/>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Think of something from {selectedCat} category <br/>
                        and input it below <br />
                        <input type="text" name="answer" />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default LobbyForm