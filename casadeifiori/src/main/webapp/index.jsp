<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home</title>
</head>
<header>
		<%@ include file="header.jsp"%>
	</header>
<body>
	<body>
		<p>
			<a href="listaItem.jsp"><button type="button" >lista prodotti </button></a> <br>
			<a href="cartPage.jsp"><button type="button" >carrello </button></a> <br>
			<a href="addItem.jsp"><button type="button" >aggiungi prodotto </button></a> 
		</p>
	</body>
	<footer>
			<%@ include file="footer.jsp" %>
		</footer>
</body>
</html>