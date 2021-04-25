<%@page import="model.*"%>
<%@page import="java.util.*"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
  <%
  	
  	Carrello cart = (Carrello) request.getSession().getAttribute("carrello");
  	Collection<?> products = (Collection<?>) cart.getItemsOrdinati();
	if(products == null) {
		response.sendRedirect("./MostraItem");	
		return;
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
	<title>Carrello</title>
</head>
<body>
	<h2>Carrello</h2>
	<table border="1">
		<tr>
			<th>ID</th>
			<th>Nome</th>
			<th>Descrizione</th>
			<th>Quantita</th>
		</tr>
		<%
			if (products != null && products.size() != 0) {
				Iterator<?> it = products.iterator();
				while (it.hasNext()) {
					ItemCarrello bean = (ItemCarrello) it.next();
		%>
		<tr>
			<td><%= bean.getItem().getId() %></td>
			<td><%= bean.getItem().getNome() %></td>
			<td><%= bean.getItem().getDescrizione() %></td>
			<td><%= bean.getQuantita() %></td>
			<td><%= bean.getItem().getPrezzo()%></td>
			
		</tr>
		<tr>
			<td colspan="6">Prezzo Totale: <%= bean.getCostoTotale()%></td>
		</tr>
		<%
				}
			} else {
		%>
		<tr>
			<td colspan="6">Il Carrello � vuoto</td>
		</tr>
		<%
			}
		%>
	</table>
</body>
</html>