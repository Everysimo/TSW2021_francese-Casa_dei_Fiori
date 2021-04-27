<%@page import="model.Item"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
	Collection<?> products = (Collection<?>) request.getAttribute("itemsCollection");
	if(products == null) {
		response.sendRedirect("./MostraItem");	
		return;
	}
%>

<!DOCTYPE html>
<html>
<%@ page import="java.util.*, model.Item"%>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Casa dei Fiori</title>
	<script>
		function alertAddCart() {
			alert(Item Aggiunto al carrello);
		}
	</script>
</head>

<body>
<%@include file="index.html" %>
	<h2>Products</h2>
	<table border="1">
		<tr>
			<th>ID</th>
			<th>Nome</th>
			<th>Descrizione</th>
			<th>Categoria</th>
			<th>Prezzo</th>
			<th>Azioni</th>
		</tr>
		<%
			if (products != null && products.size() != 0) {
				Iterator<?> it = products.iterator();
				while (it.hasNext()) {
					Item bean = (Item) it.next();
		%>
		<tr>
			<td><%= bean.getId() %></td>
			<td><%= bean.getNome() %></td>
			<td><%= bean.getDescrizione() %></td>
			<td><%= bean.getTipo().toString() %></td>
			<td><%= bean.calcolaPrezzo() %></td>
			<td><a href="delete?itemID=<%=bean.getId()%>"><button type="button" >Elimina da db </button></a> <br>
				<a href="MostraDettagli?itemID=<%=bean.getId()%>"><button type="button" >Mostra dettagli </button></a> <br> 
				<a href="addCart?itemID=<%=bean.getId()%>" onclick="alertAddCart()"><button type="button" >Aggiungi al Carrello </button> </a> </td> 
		</tr>
		<%
				}
			} else {
		%>
		<tr>
			<td colspan="6">No products available</td>
		</tr>
		<%
			}
		%>
	</table>
	<a href="showCart.jsp"><button type="button" >mostra carrello </button></a>
</body>
</html>