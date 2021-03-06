package control;

import java.io.IOException;
/*import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;*/
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Password;
import model.User;
import model.UserDAO;

/**
 * Servlet implementation class logIn
 */
@WebServlet("/logIn")
public class LogIn extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public LogIn() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession sessione = request.getSession(true);
		User loggedUser = new User();
		
		UserDAO userdao = new UserDAO();
		String username=request.getParameter("username");
		if (username.contains("@")&&username.contains(".")) {
			try {
				loggedUser=userdao.doRetrieveBy("email", username);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else {
			try {
				loggedUser=userdao.doRetrieveBy("telefono", username);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(Password.isCorrect(request.getParameter("password"), loggedUser.getPassword())) {
			synchronized(sessione) {
				sessione.setAttribute("loggedUser", loggedUser);
				sessione.setAttribute("isAdmin", loggedUser.isAdmin());
			}
			response.sendRedirect("index.jsp");
		}
	}

}