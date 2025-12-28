using System;
using System.IO;
using System.Text.Json;
using System.Runtime.Serialization;

public static class Lab10Serializer
{
    public static string ValidateAndSerialize(Lab10Persoana obj)
    {
        if (obj == null)
            throw new InvalidDataException("Obiectul este invalid.");

        try
        {
            return JsonSerializer.Serialize(obj);
        }
        catch
        {
            throw new SerializationException("Eroare la serializare.");
        }
    }
}

public class Lab10Persoana
{
    public string Nume { get; set; }
    public int Varsta { get; set; }
}