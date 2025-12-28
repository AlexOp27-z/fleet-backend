using System;
using System.Collections.Generic;

public class Lab10EmptyListException : Exception
{
    public Lab10EmptyListException(string mesaj) : base(mesaj) { }
}

public static class Lab10DuplicateChecker
{
    public static bool CheckForDuplicates(List<int> numbers)
    {
        if (numbers == null || numbers.Count == 0)
            throw new Lab10EmptyListException("Lista este goală.");

        HashSet<int> set = new HashSet<int>();

        foreach (int n in numbers)
        {
            if (!set.Add(n))
                return true;
        }

        return false;
    }
}