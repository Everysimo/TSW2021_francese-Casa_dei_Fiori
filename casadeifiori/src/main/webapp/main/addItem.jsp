<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<form method="post" action="AggiungiItem"> 
		<label for="name">Nome:</label><br> 
		<input id="name" name="name" type="text" maxlength="20" required placeholder="inserire nome"><br> 
		<label for="description">Descrizione:</label><br>
		<textarea id="editortesto" name="description" placeholder="inserire descrizione"></textarea><br>
		<label for="price">Prezzo:</label><br> 
		<input id="price" name="price" type="text" pattern="[0-9]{1,}.[0-9]{2}" required><br>	
		<label for="iva">Iva:</label><br> 
		<input id="iva" name="iva" type="number" min="0" value="22" required><br>
		<label for="sconto">Sconto:</label><br> 
		<input id="sconto" name="sconto" type="number" min="0" value="0" required><br>
		<label for="tipo">Tipo:</label><br> 
		<select name="tipo" id="tipo">
			<option value="piante"> piante </option>
			<option value="fioriVeri"> fiori veri </option>
			<option value="fioriFinti"> fiori finti </option>
			<option value="oggettistica"> oggettistica </option>
		</select>
		<br>
		<label for="quantity">Quantit�:</label><br> 
		<input id="quantity" name="quantity" type="number" min="1" value="1" required><br>
		<input type="submit" value="Add"><input type="reset" value="Reset">
	</form>
</html>