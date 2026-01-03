// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

using Accounting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

Console.WriteLine("Accounting service started");

Environment.GetEnvironmentVariables()
    .FilterRelevant()
    .OutputInOrder();

var host = Host.CreateDefaultBuilder(args)
    .ConfigureLogging(logging =>
    {
        // Add JSON console logging with scopes enabled for Datadog correlation
        logging.AddJsonConsole(options =>
        {
            options.IncludeScopes = true; // Critical for DD log-trace correlation
            options.JsonWriterOptions = new System.Text.Json.JsonWriterOptions
            {
                Indented = false // Single-line JSON for log aggregation
            };
        });
    })
    .ConfigureServices(services =>
    {
        services.AddSingleton<Consumer>();
    })
    .Build();

var consumer = host.Services.GetRequiredService<Consumer>();
consumer.StartListening();

host.Run();
