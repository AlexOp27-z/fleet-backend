using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = WebApplication.Create();

List<Product> products = new()
{
    new Product { Id = 1, Name = "Laptop", Description = "Laptop gaming", Price = 1200, Stock = 5 },
    new Product { Id = 2, Name = "Mouse", Description = "Mouse wireless", Price = 25, Stock = 50 }
};

app.MapGet("/api/products", () => products);

app.MapPost("/api/products", ([FromBody] Product p) =>
{
    p.Id = products.Count == 0 ? 1 : products.Max(x => x.Id) + 1;
    products.Add(p);
    return p;
});

app.Run();

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int Stock { get; set; }
}