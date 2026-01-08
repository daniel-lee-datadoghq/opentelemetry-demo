# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0


FROM golang:1.25-bookworm AS builder

WORKDIR /usr/src/app/

COPY ./src/product-catalog/go.mod go.mod
COPY ./src/product-catalog/go.sum go.sum

RUN go mod download
RUN go install github.com/DataDog/orchestrion

COPY ./src/product-catalog/genproto/oteldemo/ genproto/oteldemo/
COPY ./src/product-catalog/products/ products/
COPY ./src/product-catalog/main.go main.go
COPY ./src/product-catalog/orchestrion.tool.go orchestrion.tool.go

RUN CGO_ENABLED=0 GOOS=linux GO111MODULE=on orchestrion go build -ldflags "-s -w" -o product-catalog main.go

FROM gcr.io/distroless/static-debian12:nonroot

WORKDIR /usr/src/app/

COPY --from=builder /usr/src/app/product-catalog/ ./

EXPOSE ${PRODUCT_CATALOG_PORT}
ENTRYPOINT [ "./product-catalog" ]
