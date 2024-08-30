import React, { useState, useEffect } from "react";

const DemoEndpoint = () => {
  const baseUrl = "https://api-digiwuh-apps.mancikmania.com";

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("register");

  // State for user registration and login
  const [userData, setUserData] = useState({
    fullname: "Yunanto Sodiq",
    email: "yunanto250@yopmail.com",
    password: "@Yunanto123",
    phoneNumber: "0812345678910",
  });

  const [loginData, setLoginData] = useState({
    phoneNumber: "0891323233",
    password: "@Yunanto123",
  });

  // State for managing events
  const [eventData, setEventData] = useState({
    title: "Bakar Bakar bersama Mas Yun",
    date: "2024-08-25",
    place: "Yogyakarta",
    content: "<p>eeheh</p>",
    contact: "0823423432432",
    imageUrl:
      "https://fastly.picsum.photos/id/238/200/300.jpg?grayscale&hmac=yy_l-6HLPsW8jO7SRZwx9go2ngMplWE-DzR26yiVPUc",
  });

  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    if (activeTab === "manageEvent") {
      fetchEvents();
    }
  }, [activeTab]);

  const handleInputChange = (e, setData) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTabChange = (tab) => {
    setResponse(null); // Clear response when tab changes
    setActiveTab(tab);
  };

  const fetchData = async (url, method = "GET", body = null) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (body) options.body = JSON.stringify(body);

      const res = await fetch(url, options);
      const data = await res.json();

      setResponse(data);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = () => fetchData(`${baseUrl}/register`, "POST", userData);
  const loginUser = () => fetchData(`${baseUrl}/login`, "POST", loginData);

  // Event management functions
  const fetchEvents = async () => {
    const data = await fetchData(`${baseUrl}/events`);
    if (data) setEvents(data.data);
  };

  const addEvent = async () => {
    await fetchData(`${baseUrl}/events`, "POST", eventData);
    fetchEvents(); // Refresh the event list
  };

  const updateEvent = async () => {
    if (editingEvent) {
      await fetchData(`${baseUrl}/events/${editingEvent.id}`, "PUT", eventData);
      fetchEvents(); // Refresh the event list
      setEditingEvent(null); // Clear the editing state
    }
  };

  const deleteEvent = async (id) => {
    await fetchData(`${baseUrl}/events/${id}`, "DELETE");
    fetchEvents(); // Refresh the event list
  };

  const handleEditClick = (event) => {
    setEditingEvent(event);
    setEventData(event); // Pre-fill form with event data
    handleTabChange("manageEvent");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Demo Endpoint Requests
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Interact with the API endpoints using the buttons below. Input
        parameters if needed and view the response.
      </p>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => handleTabChange("register")}
          className={`px-4 py-2 font-semibold rounded-t-lg ${
            activeTab === "register"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          Register User
        </button>
        <button
          onClick={() => handleTabChange("login")}
          className={`px-4 py-2 font-semibold rounded-t-lg ${
            activeTab === "login"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          Login User
        </button>
        <button
          onClick={() => handleTabChange("manageEvent")}
          className={`px-4 py-2 font-semibold rounded-t-lg ${
            activeTab === "manageEvent"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          Manage Events
        </button>
      </div>

      {/* Content based on Active Tab */}
      {activeTab === "register" && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            User Registration Data:
          </h2>
          <input
            type="text"
            name="fullname"
            value={userData.fullname}
            onChange={(e) => handleInputChange(e, setUserData)}
            placeholder="Full Name"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) => handleInputChange(e, setUserData)}
            placeholder="Email"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={(e) => handleInputChange(e, setUserData)}
            placeholder="Password"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={(e) => handleInputChange(e, setUserData)}
            placeholder="Phone Number"
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={registerUser}
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            Register User
          </button>
        </div>
      )}

      {activeTab === "login" && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            User Login Data:
          </h2>
          <input
            type="text"
            name="phoneNumber"
            value={loginData.phoneNumber}
            onChange={(e) => handleInputChange(e, setLoginData)}
            placeholder="Phone Number"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={(e) => handleInputChange(e, setLoginData)}
            placeholder="Password"
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={loginUser}
            className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            Login User
          </button>
        </div>
      )}

      {activeTab === "manageEvent" && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Event Data:
          </h2>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={(e) => handleInputChange(e, setEventData)}
            placeholder="Title"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={(e) => handleInputChange(e, setEventData)}
            placeholder="Date"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="place"
            value={eventData.place}
            onChange={(e) => handleInputChange(e, setEventData)}
            placeholder="Place"
            className="mb-2 p-2 border rounded w-full"
          />
          <textarea
            name="content"
            value={eventData.content}
            onChange={(e) => handleInputChange(e, setEventData)}
            placeholder="Content"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="contact"
            value={eventData.contact}
            onChange={(e) => handleInputChange(e, setEventData)}
            placeholder="Contact"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="imageUrl"
            value={eventData.imageUrl}
            onChange={(e) => handleInputChange(e, setEventData)}
            placeholder="Image URL"
            className="mb-2 p-2 border rounded w-full"
          />

          <div className="flex justify-between mt-4">
            <button
              onClick={addEvent}
              className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              Add Event
            </button>
            {editingEvent && (
              <button
                onClick={updateEvent}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                Update Event
              </button>
            )}
          </div>

          {/* Event List Table */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Events List:
            </h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Title</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Place</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td className="py-2 px-4 border-b">{event.title}</td>
                    <td className="py-2 px-4 border-b">{event.date}</td>
                    <td className="py-2 px-4 border-b">{event.place}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleEditClick(event)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Display Response or Error */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {response && (
        <div className="mt-8 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Response:
          </h2>
          <div className="overflow-x-auto max-w-full">
            <pre className="text-gray-800 whitespace-pre-wrap">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoEndpoint;
