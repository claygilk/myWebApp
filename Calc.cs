using System;
using System.Collections.Generic;
using System.Text;

namespace RackMath
{
    public static class Calculator
    {
        public static int PrintThree()
        {
            return 3;
        }

        public static List<double> CalculatePlates(double totalWeight)
        {
            double barWeight = 45;

            double[] plateSizes = { 45, 25, 10, 5, 2.5 };

            double runningWeight = totalWeight - barWeight;


            List<double> plates = new List<double>();

            foreach (double plate in plateSizes)
            {
                while (runningWeight >= plate*2)
                {
                    plates.Add(plate);
                    runningWeight -= plate*2;
                }
            }

            return plates;

        }

        public static double OneRepMax(double weight, double reps)
        {
            double max = Math.Round(weight / (1.0278 - (0.0278 * reps)));

            return max;
        }

    }
}
