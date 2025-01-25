export default function handler(req, res) {
    const name = req.query.name || "Guest";
    res.status(200).json({ message: `Hello, ${name}!` });
}
